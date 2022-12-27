// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffBulkSvg from '@ant-design/icons-svg/lib/asn/ToggleOffBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffBulk: ToggleOffBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffBulkSvg}></AntdIcon>;
};

ToggleOffBulk.displayName = 'ToggleOffBulk';
ToggleOffBulk.inheritAttrs = false;
export default ToggleOffBulk;