// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/PenToolTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolTwoTone: PenToolTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolTwoToneSvg}></AntdIcon>;
};

PenToolTwoTone.displayName = 'PenToolTwoTone';
PenToolTwoTone.inheritAttrs = false;
export default PenToolTwoTone;