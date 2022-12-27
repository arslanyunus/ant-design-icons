// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightOutline: TextalignRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightOutlineSvg}></AntdIcon>;
};

TextalignRightOutline.displayName = 'TextalignRightOutline';
TextalignRightOutline.inheritAttrs = false;
export default TextalignRightOutline;