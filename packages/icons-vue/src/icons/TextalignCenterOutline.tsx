// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterOutline: TextalignCenterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterOutlineSvg}></AntdIcon>;
};

TextalignCenterOutline.displayName = 'TextalignCenterOutline';
TextalignCenterOutline.inheritAttrs = false;
export default TextalignCenterOutline;