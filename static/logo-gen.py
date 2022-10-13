def get_x_cord(y, m, c):
    return (y-c)/m

def get_y_cord(x, m, c):
    return m*x + c

def get_slope(x1, y1, x2, y2):
    return (y1-y2)/(x1-x2)

def get_c(m, x, y):
    return y - m*x

if __name__ == "__main__":
    
    top_limit = 30.3
    bottom_limit = 61
    left_limit = 25.5417
    right_limit = 53.6917
    top_crest_width = 5
    thickness = 5
    dash_thickness = 5
    gap = 1
    dash_height = 9
    bottom_left = [left_limit, bottom_limit]

    bottom_right = [right_limit, bottom_limit]
    top_center = [(left_limit + right_limit) / 2, top_limit]

    top_left = [top_center[0]-top_crest_width/2, top_limit]
    top_right = [top_center[0]+top_crest_width/2, top_limit]

    left_leg = [bottom_left[0] + thickness, bottom_left[1]]

    left_slope = get_slope(*bottom_left, *top_left)
    left_c = get_c(left_slope, *left_leg)

    temp_y1 = left_leg[1] - dash_height
    dash_left = [get_x_cord(temp_y1, left_slope, left_c), temp_y1]

    right_leg = [bottom_right[0] - thickness, bottom_right[1]]
    right_slope = get_slope(*bottom_right, *top_right)
    right_c = get_c(right_slope, *right_leg)

    temp_y1 = right_leg[1] - dash_height
    dash_right = [get_x_cord(temp_y1, right_slope, right_c), temp_y1]

    a_outline_path = "M {} {} L {} {} L {} {} L {} {} L {} {} L {} {} L {} {} L {} {} Z "\
        .format(*bottom_left, *top_left, *top_right, *bottom_right, *right_leg, *dash_right, *dash_left, *left_leg)

    temp_y1 = dash_left[1] - dash_thickness
    hole_bottom_left = [get_x_cord(temp_y1, left_slope, left_c), temp_y1]
    hole_bottom_right = [get_x_cord(temp_y1, right_slope, right_c), temp_y1]

    temp_y1 = top_center[1] + gap
    hole_top_left = [get_x_cord(temp_y1, left_slope, left_c), temp_y1]
    hole_top_right = [get_x_cord(temp_y1, right_slope, right_c), temp_y1]

    a_hole_path = "M {} {} L {} {} L {} {} L {} {} Z " \
        .format(*hole_bottom_left, *hole_bottom_right, *hole_top_right, *hole_top_left)

    print(a_outline_path + a_hole_path)