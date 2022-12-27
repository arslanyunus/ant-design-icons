// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemTwoToneSvg from '@ant-design/icons-svg/lib/asn/BackwardItemTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemTwoTone: BackwardItemTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemTwoToneSvg}></AntdIcon>;
};

BackwardItemTwoTone.displayName = 'BackwardItemTwoTone';
BackwardItemTwoTone.inheritAttrs = false;
export default BackwardItemTwoTone;