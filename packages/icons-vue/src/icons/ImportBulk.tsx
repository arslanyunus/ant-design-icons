// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportBulkSvg from '@ant-design/icons-svg/lib/asn/ImportBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportBulk: ImportBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportBulkSvg}></AntdIcon>;
};

ImportBulk.displayName = 'ImportBulk';
ImportBulk.inheritAttrs = false;
export default ImportBulk;