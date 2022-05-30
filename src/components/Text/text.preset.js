import { colors } from "../../Theme/color";
import { typography } from "../../Theme/typography";

const BASE = {
    fontFamily: typography.primary,
    color: colors.white,
    fontSize: 16
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white,
    fontSize: 16
}

export const presets = {
    default: BASE,
    bold: BASE_BOLD,
    h1: {
        ...BASE_BOLD,
        fontSize: 32
    },
    h2: {
        ...BASE_BOLD,
        fontSize: 28
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 20
    },
    small: {
        ...BASE,
        fontSize: 20
    }
}