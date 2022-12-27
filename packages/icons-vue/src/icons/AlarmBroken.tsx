// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmBrokenSvg from '@ant-design/icons-svg/lib/asn/AlarmBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmBroken: AlarmBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmBrokenSvg}></AntdIcon>;
};

AlarmBroken.displayName = 'AlarmBroken';
AlarmBroken.inheritAttrs = false;
export default AlarmBroken;