// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftOutline: TextalignLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftOutlineSvg}></AntdIcon>;
};

TextalignLeftOutline.displayName = 'TextalignLeftOutline';
TextalignLeftOutline.inheritAttrs = false;
export default TextalignLeftOutline;