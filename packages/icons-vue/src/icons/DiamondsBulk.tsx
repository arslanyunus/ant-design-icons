// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsBulkSvg from '@ant-design/icons-svg/lib/asn/DiamondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsBulk: DiamondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsBulkSvg}></AntdIcon>;
};

DiamondsBulk.displayName = 'DiamondsBulk';
DiamondsBulk.inheritAttrs = false;
export default DiamondsBulk;