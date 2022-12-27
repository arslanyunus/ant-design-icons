// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportOutlineSvg from '@ant-design/icons-svg/lib/asn/ImportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportOutline: ImportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportOutlineSvg}></AntdIcon>;
};

ImportOutline.displayName = 'ImportOutline';
ImportOutline.inheritAttrs = false;
export default ImportOutline;