// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdTwoToneSvg from '@ant-design/icons-svg/lib/asn/CdTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdTwoTone: CdTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdTwoToneSvg}></AntdIcon>;
};

CdTwoTone.displayName = 'CdTwoTone';
CdTwoTone.inheritAttrs = false;
export default CdTwoTone;