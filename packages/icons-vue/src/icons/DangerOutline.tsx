// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerOutlineSvg from '@ant-design/icons-svg/lib/asn/DangerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerOutline: DangerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerOutlineSvg}></AntdIcon>;
};

DangerOutline.displayName = 'DangerOutline';
DangerOutline.inheritAttrs = false;
export default DangerOutline;