export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon:
    | ((primaryColor: string, secondaryColor: string) => AbstractNode)
    | AbstractNode;
}

export type ThemeType = 'bold' | 'broken' | 'bulk' | 'linear' | 'outline' | 'twotone';
export type ThemeTypeUpperCase = 'Bold' | 'Broken' | 'Bulk' | 'Linear' | 'Outline' | 'TwoTone';
