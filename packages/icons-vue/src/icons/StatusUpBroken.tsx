// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpBrokenSvg from '@ant-design/icons-svg/lib/asn/StatusUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpBroken: StatusUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpBrokenSvg}></AntdIcon>;
};

StatusUpBroken.displayName = 'StatusUpBroken';
StatusUpBroken.inheritAttrs = false;
export default StatusUpBroken;