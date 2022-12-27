// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportTwoToneSvg from '@ant-design/icons-svg/lib/asn/ImportTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportTwoTone: ImportTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportTwoToneSvg}></AntdIcon>;
};

ImportTwoTone.displayName = 'ImportTwoTone';
ImportTwoTone.inheritAttrs = false;
export default ImportTwoTone;