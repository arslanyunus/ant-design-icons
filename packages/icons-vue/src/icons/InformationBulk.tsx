// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationBulkSvg from '@ant-design/icons-svg/lib/asn/InformationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationBulk: InformationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationBulkSvg}></AntdIcon>;
};

InformationBulk.displayName = 'InformationBulk';
InformationBulk.inheritAttrs = false;
export default InformationBulk;