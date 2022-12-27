// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusBoldSvg from '@ant-design/icons-svg/lib/asn/StatusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusBold: StatusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusBoldSvg}></AntdIcon>;
};

StatusBold.displayName = 'StatusBold';
StatusBold.inheritAttrs = false;
export default StatusBold;