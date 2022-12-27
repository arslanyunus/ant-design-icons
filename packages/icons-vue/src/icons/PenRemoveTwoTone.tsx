// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/PenRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveTwoTone: PenRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveTwoToneSvg}></AntdIcon>;
};

PenRemoveTwoTone.displayName = 'PenRemoveTwoTone';
PenRemoveTwoTone.inheritAttrs = false;
export default PenRemoveTwoTone;