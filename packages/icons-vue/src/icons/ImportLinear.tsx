// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportLinearSvg from '@ant-design/icons-svg/lib/asn/ImportLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportLinear: ImportLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportLinearSvg}></AntdIcon>;
};

ImportLinear.displayName = 'ImportLinear';
ImportLinear.inheritAttrs = false;
export default ImportLinear;