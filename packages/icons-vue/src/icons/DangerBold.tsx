// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerBoldSvg from '@ant-design/icons-svg/lib/asn/DangerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerBold: DangerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerBoldSvg}></AntdIcon>;
};

DangerBold.displayName = 'DangerBold';
DangerBold.inheritAttrs = false;
export default DangerBold;