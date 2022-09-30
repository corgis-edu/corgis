def snake_case(string):
    return string.replace(" ", "_").replace("-", "_").lower()


def camel_case_caps(string):
    return ''.join(x for x in string.title() if not x.isspace())


def camel_case(string):
    s = camel_case_caps(string)
    return s[0].lower() + s[1:] if s else ""


def flat_case(string):
    return string.replace(" ", "").replace("-", "").replace("_", "").lower()


def kebab_case(string):
    return string.replace(" ", "-").replace("_", "-").lower()


def sluggify(string):
    return (string.replace('.', '-').replace("[", "__")
            .replace("]", "__").replace(" ", "-")
            .replace("#", "_").replace("/", "_")
            .replace("'", "_"))
