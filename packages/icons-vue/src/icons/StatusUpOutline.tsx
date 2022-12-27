// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpOutlineSvg from '@ant-design/icons-svg/lib/asn/StatusUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpOutline: StatusUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpOutlineSvg}></AntdIcon>;
};

StatusUpOutline.displayName = 'StatusUpOutline';
StatusUpOutline.inheritAttrs = false;
export default StatusUpOutline;