// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseOutlineSvg from '@ant-design/icons-svg/lib/asn/PenCloseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseOutline: PenCloseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseOutlineSvg}></AntdIcon>;
};

PenCloseOutline.displayName = 'PenCloseOutline';
PenCloseOutline.inheritAttrs = false;
export default PenCloseOutline;