// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingBulkSvg from '@ant-design/icons-svg/lib/asn/BuildingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingBulk: BuildingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingBulkSvg}></AntdIcon>;
};

BuildingBulk.displayName = 'BuildingBulk';
BuildingBulk.inheritAttrs = false;
export default BuildingBulk;