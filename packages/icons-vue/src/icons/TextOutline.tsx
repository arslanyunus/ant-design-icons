// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextOutlineSvg from '@ant-design/icons-svg/lib/asn/TextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextOutline: TextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextOutlineSvg}></AntdIcon>;
};

TextOutline.displayName = 'TextOutline';
TextOutline.inheritAttrs = false;
export default TextOutline;