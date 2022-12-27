// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveOutline: HeartRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveOutlineSvg}></AntdIcon>;
};

HeartRemoveOutline.displayName = 'HeartRemoveOutline';
HeartRemoveOutline.inheritAttrs = false;
export default HeartRemoveOutline;