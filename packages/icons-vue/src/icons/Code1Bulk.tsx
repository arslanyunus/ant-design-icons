// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1BulkSvg from '@ant-design/icons-svg/lib/asn/Code1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1Bulk: Code1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1BulkSvg}></AntdIcon>;
};

Code1Bulk.displayName = 'Code1Bulk';
Code1Bulk.inheritAttrs = false;
export default Code1Bulk;