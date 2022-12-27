// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportBoldSvg from '@ant-design/icons-svg/lib/asn/ImportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportBold: ImportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportBoldSvg}></AntdIcon>;
};

ImportBold.displayName = 'ImportBold';
ImportBold.inheritAttrs = false;
export default ImportBold;