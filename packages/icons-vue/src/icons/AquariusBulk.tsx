// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusBulkSvg from '@ant-design/icons-svg/lib/asn/AquariusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusBulk: AquariusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusBulkSvg}></AntdIcon>;
};

AquariusBulk.displayName = 'AquariusBulk';
AquariusBulk.inheritAttrs = false;
export default AquariusBulk;