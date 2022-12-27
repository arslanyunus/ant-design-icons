// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostTwoToneSvg from '@ant-design/icons-svg/lib/asn/GhostTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostTwoTone: GhostTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostTwoToneSvg}></AntdIcon>;
};

GhostTwoTone.displayName = 'GhostTwoTone';
GhostTwoTone.inheritAttrs = false;
export default GhostTwoTone;