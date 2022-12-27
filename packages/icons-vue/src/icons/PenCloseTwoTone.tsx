// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseTwoToneSvg from '@ant-design/icons-svg/lib/asn/PenCloseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseTwoTone: PenCloseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseTwoToneSvg}></AntdIcon>;
};

PenCloseTwoTone.displayName = 'PenCloseTwoTone';
PenCloseTwoTone.inheritAttrs = false;
export default PenCloseTwoTone;