// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsBulkSvg from '@ant-design/icons-svg/lib/asn/BuildingsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsBulk: BuildingsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsBulkSvg}></AntdIcon>;
};

BuildingsBulk.displayName = 'BuildingsBulk';
BuildingsBulk.inheritAttrs = false;
export default BuildingsBulk;