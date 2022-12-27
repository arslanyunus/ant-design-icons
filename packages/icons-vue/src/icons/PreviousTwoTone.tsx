// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousTwoToneSvg from '@ant-design/icons-svg/lib/asn/PreviousTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousTwoTone: PreviousTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousTwoToneSvg}></AntdIcon>;
};

PreviousTwoTone.displayName = 'PreviousTwoTone';
PreviousTwoTone.inheritAttrs = false;
export default PreviousTwoTone;