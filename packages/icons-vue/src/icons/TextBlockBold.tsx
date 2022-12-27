// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockBoldSvg from '@ant-design/icons-svg/lib/asn/TextBlockBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockBold: TextBlockBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockBoldSvg}></AntdIcon>;
};

TextBlockBold.displayName = 'TextBlockBold';
TextBlockBold.inheritAttrs = false;
export default TextBlockBold;