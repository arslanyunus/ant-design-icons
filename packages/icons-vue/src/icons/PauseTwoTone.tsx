// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseTwoTone: PauseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseTwoToneSvg}></AntdIcon>;
};

PauseTwoTone.displayName = 'PauseTwoTone';
PauseTwoTone.inheritAttrs = false;
export default PauseTwoTone;