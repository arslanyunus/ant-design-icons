// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/PauseCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleBroken: PauseCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleBrokenSvg}></AntdIcon>;
};

PauseCircleBroken.displayName = 'PauseCircleBroken';
PauseCircleBroken.inheritAttrs = false;
export default PauseCircleBroken;