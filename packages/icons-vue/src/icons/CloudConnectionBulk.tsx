// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionBulkSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionBulk: CloudConnectionBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionBulkSvg}></AntdIcon>;
};

CloudConnectionBulk.displayName = 'CloudConnectionBulk';
CloudConnectionBulk.inheritAttrs = false;
export default CloudConnectionBulk;