// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpBoldSvg from '@ant-design/icons-svg/lib/asn/StatusUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpBold: StatusUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpBoldSvg}></AntdIcon>;
};

StatusUpBold.displayName = 'StatusUpBold';
StatusUpBold.inheritAttrs = false;
export default StatusUpBold;