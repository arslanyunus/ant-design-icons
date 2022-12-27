// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramBulkSvg from '@ant-design/icons-svg/lib/asn/DiagramBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramBulk: DiagramBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramBulkSvg}></AntdIcon>;
};

DiagramBulk.displayName = 'DiagramBulk';
DiagramBulk.inheritAttrs = false;
export default DiagramBulk;