// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousOutlineSvg from '@ant-design/icons-svg/lib/asn/PreviousOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousOutline: PreviousOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousOutlineSvg}></AntdIcon>;
};

PreviousOutline.displayName = 'PreviousOutline';
PreviousOutline.inheritAttrs = false;
export default PreviousOutline;