// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleBulkSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleBulk: ToggleOnCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleBulkSvg}></AntdIcon>;
};

ToggleOnCircleBulk.displayName = 'ToggleOnCircleBulk';
ToggleOnCircleBulk.inheritAttrs = false;
export default ToggleOnCircleBulk;