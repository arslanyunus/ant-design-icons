// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1BulkSvg from '@ant-design/icons-svg/lib/asn/Eraser1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1Bulk: Eraser1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1BulkSvg}></AntdIcon>;
};

Eraser1Bulk.displayName = 'Eraser1Bulk';
Eraser1Bulk.inheritAttrs = false;
export default Eraser1Bulk;