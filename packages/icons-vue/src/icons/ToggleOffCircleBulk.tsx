// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleBulkSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleBulk: ToggleOffCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleBulkSvg}></AntdIcon>;
};

ToggleOffCircleBulk.displayName = 'ToggleOffCircleBulk';
ToggleOffCircleBulk.inheritAttrs = false;
export default ToggleOffCircleBulk;