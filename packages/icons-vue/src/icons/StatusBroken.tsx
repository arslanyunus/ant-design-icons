// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusBrokenSvg from '@ant-design/icons-svg/lib/asn/StatusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusBroken: StatusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusBrokenSvg}></AntdIcon>;
};

StatusBroken.displayName = 'StatusBroken';
StatusBroken.inheritAttrs = false;
export default StatusBroken;