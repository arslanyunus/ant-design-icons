// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportBrokenSvg from '@ant-design/icons-svg/lib/asn/ImportBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportBroken: ImportBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportBrokenSvg}></AntdIcon>;
};

ImportBroken.displayName = 'ImportBroken';
ImportBroken.inheritAttrs = false;
export default ImportBroken;