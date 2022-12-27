// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleBoldSvg from '@ant-design/icons-svg/lib/asn/PauseCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleBold: PauseCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleBoldSvg}></AntdIcon>;
};

PauseCircleBold.displayName = 'PauseCircleBold';
PauseCircleBold.inheritAttrs = false;
export default PauseCircleBold;