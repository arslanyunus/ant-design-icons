// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxRemoveOutline: BoxRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxRemoveOutlineSvg}></AntdIcon>;
};

BoxRemoveOutline.displayName = 'BoxRemoveOutline';
BoxRemoveOutline.inheritAttrs = false;
export default BoxRemoveOutline;