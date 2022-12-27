// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanTwoTone: ScanTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanTwoToneSvg}></AntdIcon>;
};

ScanTwoTone.displayName = 'ScanTwoTone';
ScanTwoTone.inheritAttrs = false;
export default ScanTwoTone;