// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockBrokenSvg from '@ant-design/icons-svg/lib/asn/TextBlockBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockBroken: TextBlockBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockBrokenSvg}></AntdIcon>;
};

TextBlockBroken.displayName = 'TextBlockBroken';
TextBlockBroken.inheritAttrs = false;
export default TextBlockBroken;