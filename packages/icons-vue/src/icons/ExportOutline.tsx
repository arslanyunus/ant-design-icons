// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportOutlineSvg from '@ant-design/icons-svg/lib/asn/ExportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExportOutline: ExportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExportOutlineSvg}></AntdIcon>;
};

ExportOutline.displayName = 'ExportOutline';
ExportOutline.inheritAttrs = false;
export default ExportOutline;