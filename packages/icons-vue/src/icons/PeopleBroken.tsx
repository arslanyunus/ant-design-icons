// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleBrokenSvg from '@ant-design/icons-svg/lib/asn/PeopleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleBroken: PeopleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleBrokenSvg}></AntdIcon>;
};

PeopleBroken.displayName = 'PeopleBroken';
PeopleBroken.inheritAttrs = false;
export default PeopleBroken;